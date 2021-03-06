mariadb --version 2>/dev/null >/dev/null

if [ "$?" -eq 0 ]; then
	brew services start mariadb >/dev/null 2>/dev/null || brew services restart mariadb
	sudo mariadb -u root -p < src/sql/init.sql;
	sudo mariadb -u root -p < config/.sqlUserEnv;
else
	echo "mariadb is not installed. Try:"
	echo "'brew install mariadb'";
fi
