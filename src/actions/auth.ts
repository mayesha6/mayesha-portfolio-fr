"use server"
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
    })
      const json = await res.json(); // read body only once
      console.log(json)

  if (!res.ok) {
    console.error("User registration failed", json);
    throw new Error(json?.message || "Registration failed");
  }

  return json;
}
export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include", 
  });
  const json = await res.json(); // read body once

  if (!res.ok) {
    console.error("Login Failed", json); // log response JSON
    throw new Error(json?.message || "Login failed");
  }

  return json; // return parsed JSON
};