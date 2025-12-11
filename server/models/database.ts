import { Pool } from 'pg';
import type { QueryResult } from "pg"; 
//makes it so that we import only type declarations ... pg is a package imported from Node.js PostgresSQL client library

const pool = new Pool({
  connectionString: "postgresql://postgres.fwchlqiodlltmbwefalq:[expressjs]@aws-0-us-west-2.pooler.supabase.com:6543/postgres"
});

export default pool;