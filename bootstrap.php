<?php
require_once "vendor/autoload.php";

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;

// Create a simple "default" Doctrine ORM configuration for Attributes
$config = ORMSetup::createAttributeMetadataConfiguration(
    [__DIR__ . "/src/classes"],
    true
);

// configuring the database connection
$connection = DriverManager::getConnection(
    [
        'driver' => 'pdo_mysql',
        'user' => 'root',
        'password' => 'root',
        'dbname' => 'DealSpotter',
        'port' => 8889
    ]
);

// obtaining the entity manager
$entityManager = EntityManager::create($connection, $config);

return $entityManager;
