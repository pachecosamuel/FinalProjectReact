import { api } from "./api";

export function ObterProdutos() {
  return new Promise((resolve, reject) => {
    return api.get("/produto").then(res => resolve(res)).catch(err => reject(err));
  });
}

export function ObterProduto(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/produto/${id}`).then(res => resolve(res)).catch(err => reject(err));
      });
}