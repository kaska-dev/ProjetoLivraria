import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://booksserver_user:cq57GTCE6ZsBTWCIfnHNSCKl28U5EFFV@dpg-cshbf7bqf0us7381m7e0-a.oregon-postgres.render.com/booksserver";
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
