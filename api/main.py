from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth.routes import router as auth_router
from routes.leads import router as leads_router
from routes.campaigns import router as campaigns_router
from routes.analytics import router as analytics_router

app = FastAPI(title="Huntly API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router)
app.include_router(leads_router)
app.include_router(campaigns_router)
app.include_router(analytics_router)

@app.get("/")
def root():
    return {"message": "Huntly API", "version": "1.0.0"}
