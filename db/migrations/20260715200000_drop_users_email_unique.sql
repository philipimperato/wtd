-- migrate:up
-- google_sub is the canonical identifier; emails can change or be
-- recycled across Google accounts, so they must not be unique.
alter table users drop constraint users_email_key;
create index users_email_idx on users (email);

-- migrate:down
drop index users_email_idx;
alter table users add constraint users_email_key unique (email);
