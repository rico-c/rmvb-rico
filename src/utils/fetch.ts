import { APIHost } from "@/constants/api";
import qs from "qs";

export const fetchGet = async (
  path: string,
  params?: Record<string, any>
) => {
  const response = await fetch(
    `${APIHost}${path}${params ? `?${qs.stringify(params)}` : ""}`
  );
  return await response.json();
};

export const fetchPost = async (path: string, json: Record<string, any>) => {
  const response = await fetch(`${APIHost}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  return await response.json();
};
