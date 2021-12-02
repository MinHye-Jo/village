import http from "../config/http";

// 목록 조회
export const ntfList = (data) => {
  return http.post("/collection/listSearch", data);
};

// 세부 정보 조회
export const ntfData = (nftId) => {
  return http.post(`/collection/${nftId}`, {});
};

// 회원가입
export const join = (data) => {
  return http.post("/auth/signup/employee", data);
};
