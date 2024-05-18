import { createConnection } from "mysql";

const connection = createConnection({
  host: "thuduc.cttnservice.com",
  port: 6868,
  user: "admin", 
  password: "3a104c99726a5d3de", 
  database: "userLogin", 
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Kết nối tới MySQL thành công!");
});
