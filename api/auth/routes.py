from fastapi import APIRouter, HTTPException, Depends
from models import UserCreate, UserLogin, Token, User
from auth.utils import (
    load_users, save_users, verify_password, get_password_hash,
    create_access_token, get_current_user
)

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=Token)
def register(user: UserCreate):
    users = load_users()

    if user.email in users:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = get_password_hash(user.password)
    users[user.email] = {
        "email": user.email,
        "name": user.name,
        "hashed_password": hashed_password
    }
    save_users(users)

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/login", response_model=Token)
def login(user: UserLogin):
    users = load_users()

    if user.email not in users or not verify_password(user.password, users[user.email]["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=User)
def get_me(current_user: str = Depends(get_current_user)):
    users = load_users()
    user_data = users.get(current_user)
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "email": user_data["email"],
        "name": user_data["name"]
    }
