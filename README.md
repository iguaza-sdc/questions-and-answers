# TODOS:
- [ ] Routes
  - [ ] Questions
  - [ ] Answers
  - [ ] Photos
- [ ] Configure for environment variable changes
  - [ ] Client
  - [ ] Database
  - [ ] Server

# Installing a PostgreSQL Server On AmazonEC2

```bash
# Update the security and other necessary dependencies.
sudo apt-get install && sudo apt-get update
```

## Install the postgresql packages

```bash
sudo apt-get install postgresql postgresql-contrib
```

## Create user with permissions

```bash
sudo -u postgresql psql
```

## Create A New Database

```bash
sudo -u postgres createdb <db_name>
```

## Change the password for the postgres user

Login as the root user:

```bash
sudo su -
```

Change the listen address:

```bash
vim /etc/postgresql/10/main/postgresql/conf
```

1. Use the search function in vim:
- Hit the esc key to make sure you are in command mode.
- `%s/listen_addresses` and Enter should bring to where that line is
- Uncomment the line by pressing x while cursor is over the `#`
- Then press `2wl` and enter to move the cursor 2 words over and 1 to the right
- Then press `cw*` and esc to change the word and replace it with `*`
- Then press `:wq!` to save and quit

Allow remote access for anyone with password authentication

```bash
vim /etc/postgresql/10/main/pg_hba.conf
```

Once inside, to get the cursor to the very end of the file:
- Press Shift+g to go the last line
- Enter Shift+A to go the end of the line in Insert mode
- Press enter to create a new line then type:

```bash
# Database administrative login by Unix domain socket
local   all             postgres                                peer

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     peer
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5
host    all             all             0.0.0.0/0               md5
```

# 19.3.1 Connection Settings

`listen_addresses (string)`
Specifies the TCP/IP addresses on which the server is to listen for connections form client applications. The value takes the form of a comma-separated list of host names and or numeric IP addresses. The special entry `*` corresponds to available IP interfaces. The entry `0.0.0.0` allows listening for all IPv6 addresses and `::` allows listening for IPv6 addresses.


