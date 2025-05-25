up:
	docker-compose build
	docker-compose up -d
	docker-compose exec php-fpm composer install
	docker-compose exec php-fpm php bin/console doctrine:migrations:migrate --no-interaction

down:
	docker-compose down

reset:
	make down
	make up

php:
	docker-compose exec -u 1000 php-fpm bash

node:
	docker-compose exec -u 1000 node bash

migrate:
	docker-compose exec php-fpm php bin/console doctrine:migrations:diff
	docker-compose exec php-fpm php bin/console doctrine:migrations:migrate --no-interaction
