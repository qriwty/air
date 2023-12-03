from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()


api_url = "https://ubilling.net.ua/aerialalerts/"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(api_url)
            if response.status_code == 200:
                response = response.json()
                new_response = []
                for region in response["states"]:
                    new_response.append({
                        "region": region,
                        "alert": response["states"][region]["alertnow"],
                        "changed": response["states"][region]["changed"],
                    })
                return new_response
            else:
                raise HTTPException(status_code=response.status_code)
    except httpx.HTTPError as error:
        return HTTPException(status_code=500)

