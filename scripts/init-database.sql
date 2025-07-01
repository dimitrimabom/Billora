-- Initialize the database with required extensions and initial data

-- Enable UUID extension if using PostgreSQL
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_invoices_user_status ON "Invoice" ("userId", "status");
CREATE INDEX IF NOT EXISTS idx_invoices_due_date ON "Invoice" ("dueDate") WHERE "status" != 'PAID';
CREATE INDEX IF NOT EXISTS idx_transactions_created_at ON "Transaction" ("createdAt");
CREATE INDEX IF NOT EXISTS idx_clients_user_name ON "Client" ("userId", "name");

-- Create a function to automatically update the updatedAt timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_user_updated_at BEFORE UPDATE ON "User" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_client_updated_at BEFORE UPDATE ON "Client" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_invoice_updated_at BEFORE UPDATE ON "Invoice" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_transaction_updated_at BEFORE UPDATE ON "Transaction" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
