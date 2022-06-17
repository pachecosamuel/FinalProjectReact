import API from "./Api";

export function ObterProdutos() {
  return new Promise((resolve, reject) => {
    return API.get("/produto").then(res => resolve(res)).catch(err => reject(err));
  });
}

export function ObterProduto(id) {
    return new Promise((resolve, reject) => {
        return API.get(`/produto/${id}`).then(res => resolve(res)).catch(err => reject(err));
      });
}