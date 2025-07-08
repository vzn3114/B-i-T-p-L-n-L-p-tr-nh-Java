// src/components/Admin/admin.js

// Lưu token vào localStorage
export function setToken(token) {
  localStorage.setItem("token", token);
}

// Lấy token từ localStorage
export function getToken() {
  return localStorage.getItem("token");
}

// Xóa token
export function removeToken() {
  localStorage.removeItem("token");
}

// Hàm fetch API có sẵn token
export async function fetchWithAuth(url, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    throw new Error("Lỗi khi gọi API: " + response.status);
  }
  return response.json();
}
