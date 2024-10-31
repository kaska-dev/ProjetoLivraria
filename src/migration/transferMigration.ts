import pool from "../config/database";

const createTransfersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        transaction VARCHAR(100) NOT NULL,
        date VARCHAR(100) UNIQUE NOT NULL,
        id_book int NOT NULL,
        id_user int NOT NULL,

        FOREIGN KEY (id_book) REFERENCES books(id),
        FOREIGN KEY (id_user) REFERENCES users(id)   
        
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createTransfersTable().then(() => process.exit(0));
