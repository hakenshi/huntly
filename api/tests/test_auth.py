import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database.models import Base
from database.connection import get_db
from main import app

# Banco de teste em memória
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

def test_register_user(client):
    response = client.post("/auth/register", json={
        "email": "test@test.com",
        "password": "123456",
        "name": "Test User"
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_register_duplicate_email(client):
    # Primeiro usuário
    client.post("/auth/register", json={
        "email": "test@test.com",
        "password": "123456",
        "name": "Test User"
    })
    
    # Tentar registrar mesmo email
    response = client.post("/auth/register", json={
        "email": "test@test.com",
        "password": "123456",
        "name": "Another User"
    })
    assert response.status_code == 400
    assert "Email already registered" in response.json()["detail"]

def test_login_valid_user(client):
    # Registrar usuário
    client.post("/auth/register", json={
        "email": "test@test.com",
        "password": "123456",
        "name": "Test User"
    })
    
    # Login
    response = client.post("/auth/login", json={
        "email": "test@test.com",
        "password": "123456"
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data

def test_login_invalid_credentials(client):
    response = client.post("/auth/login", json={
        "email": "wrong@test.com",
        "password": "wrongpass"
    })
    assert response.status_code == 401
    assert "Invalid credentials" in response.json()["detail"]

def test_get_me_authenticated(client):
    # Registrar e fazer login
    register_response = client.post("/auth/register", json={
        "email": "test@test.com",
        "password": "123456",
        "name": "Test User"
    })
    token = register_response.json()["access_token"]
    
    # Acessar /me
    response = client.get("/auth/me", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "test@test.com"
    assert data["name"] == "Test User"

def test_get_me_unauthenticated(client):
    response = client.get("/auth/me")
    assert response.status_code == 403
