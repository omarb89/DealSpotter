<?php

require_once "bootstrap.php";

$entityManager = include 'bootstrap.php';

return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($entityManager);
