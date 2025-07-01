-- Seed data for development and testing

-- Note: This is sample data for development purposes
-- In production, users would be created through the authentication system

-- Sample user settings (these would be created automatically when users sign up)
-- INSERT INTO "UserSettings" ("id", "userId", "theme", "currency", "dateFormat", "timeZone") 
-- VALUES ('settings_1', 'user_1', 'light', 'EUR', 'DD/MM/YYYY', 'Europe/Paris');

-- Sample clients (these would be created by authenticated users)
-- INSERT INTO "Client" ("id", "userId", "name", "email", "phone", "address", "company") VALUES
-- ('client_1', 'user_1', 'John Doe', 'john@example.com', '+33 1 23 45 67 89', '123 Rue de la Paix, 75001 Paris', 'Riverside Designs'),
-- ('client_2', 'user_1', 'Jane Smith', 'jane@example.com', '+33 1 98 76 54 32', '456 Avenue des Champs, 75008 Paris', 'Horizon Solutions'),
-- ('client_3', 'user_1', 'Bob Johnson', 'bob@example.com', '+33 1 11 22 33 44', '789 Boulevard Saint-Germain, 75007 Paris', 'Stellar Innovations');

-- Sample invoices
-- INSERT INTO "Invoice" ("id", "userId", "clientId", "number", "amount", "tax", "total", "status", "issuedAt", "dueDate", "description") VALUES
-- ('invoice_1', 'user_1', 'client_1', 'INV-001', 2500.00, 500.00, 3000.00, 'PAID', '2024-04-17T10:00:00Z', '2024-05-17T10:00:00Z', 'Website design services'),
-- ('invoice_2', 'user_1', 'client_2', 'INV-002', 4200.00, 840.00, 5040.00, 'SENT', '2024-04-14T10:00:00Z', '2024-05-14T10:00:00Z', 'Software development consultation'),
-- ('invoice_3', 'user_1', 'client_3', 'INV-003', 1100.00, 220.00, 1320.00, 'PAID', '2024-04-09T10:00:00Z', '2024-05-09T10:00:00Z', 'Logo design and branding');

-- Sample invoice items
-- INSERT INTO "InvoiceItem" ("id", "invoiceId", "description", "quantity", "unitPrice", "total") VALUES
-- ('item_1', 'invoice_1', 'Website Design', 1, 2000.00, 2000.00),
-- ('item_2', 'invoice_1', 'Additional Revisions', 5, 100.00, 500.00),
-- ('item_3', 'invoice_2', 'Development Hours', 40, 105.00, 4200.00),
-- ('item_4', 'invoice_3', 'Logo Design', 1, 800.00, 800.00),
-- ('item_5', 'invoice_3', 'Brand Guidelines', 1, 300.00, 300.00);

-- Sample transactions
-- INSERT INTO "Transaction" ("id", "userId", "invoiceId", "type", "description", "amount", "status") VALUES
-- ('txn_1', 'user_1', 'invoice_1', 'INVOICE_PAID', 'Payment received for Invoice INV-001', 3000.00, 'COMPLETED'),
-- ('txn_2', 'user_1', 'invoice_2', 'INVOICE_SENT', 'Invoice INV-002 sent to client', 5040.00, 'COMPLETED'),
-- ('txn_3', 'user_1', 'invoice_3', 'INVOICE_PAID', 'Payment received for Invoice INV-003', 1320.00, 'COMPLETED'),
-- ('txn_4', 'user_1', NULL, 'CLIENT_ADDED', 'New client Riverside Designs added', 0, 'COMPLETED');
