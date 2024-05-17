#API de Produtos - Operações CRUD

Esta é uma API simples desenvolvida em Node.js usando o framework Express e o banco de dados MongoDB. A API permite realizar operações CRUD (Create, Read, Update, Delete) em uma entidade de produtos.

##Como usar
Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.

Clone este repositório:


git clone <url_do_repositório>
Instale as dependências:


npm install
Inicie o servidor:


node src/index.js
A API estará disponível em http://localhost:3000.

Rotas disponíveis
GET /products: Retorna todos os produtos cadastrados.

POST /products: Cria um novo produto. Requer um corpo de requisição JSON com os campos name, description, price e quantity.

PUT /products/:id: Atualiza um produto existente com o ID fornecido. Requer um corpo de requisição JSON com os campos a serem atualizados.

DELETE /products/:id: Exclui um produto com o ID fornecido.

Exemplo de uso
Criar um novo produto:


POST /products
Content-Type: application/json

{
  "name": "Notebook",
  "description": "A high-performance laptop suitable for all your computing needs.",
  "price": 999.99,
  "quantity": 5
}
Atualizar um produto existente:


PUT /products/:id
Content-Type: application/json

{
  "name": "New Notebook",
  "price": 1099.99
}
Excluir um produto existente:


DELETE /products/:id
##Tecnologias utilizadas
Node.js
Express.js
MongoDB
Autor
Nome: Felipe Emanoel

Esta é uma API simples para fins educacionais. Sinta-se à vontade para expandi-la e personalizá-la conforme necessário para seus projetos. Se tiver alguma dúvida ou problema, não hesite em entrar em contato!
