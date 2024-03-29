-- MySQL Script generated by MySQL Workbench
-- Wed Apr 26 00:04:25 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DBGrupo5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DBGrupo5
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DBGrupo5` DEFAULT CHARACTER SET utf8 ;
USE `DBGrupo5` ;

-- -----------------------------------------------------
-- Table `DBGrupo5`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`users` (
  `id` INT NOT NULL,
  `name` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `phone` INT NULL,
  `dni` INT NOT NULL,
  `birthday` DATE NOT NULL,
  `avatar` TEXT NULL,
  `password` TEXT NOT NULL,
  `confirmpassword` TEXT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `roles_id`),
  INDEX `fk_users_roles_idx` (`roles_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`roles_id`)
    REFERENCES `DBGrupo5`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`product_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`product_categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`trademarks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`trademarks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`families`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`families` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`warranties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`warranties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `shortname` TEXT NOT NULL,
  `price` DECIMAL(11,2) NOT NULL,
  `model` TEXT NOT NULL,
  `product_categories_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  `trademarks_id` INT NOT NULL,
  `families_id` INT NOT NULL,
  `warranties_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_product_categories1_idx` (`product_categories_id` ASC) VISIBLE,
  INDEX `fk_products_status1_idx` (`status_id` ASC) VISIBLE,
  INDEX `fk_products_trademarks1_idx` (`trademarks_id` ASC) VISIBLE,
  INDEX `fk_products_families1_idx` (`families_id` ASC) VISIBLE,
  INDEX `fk_products_warranties1_idx` (`warranties_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_product_categories1`
    FOREIGN KEY (`product_categories_id`)
    REFERENCES `DBGrupo5`.`product_categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `DBGrupo5`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_trademarks1`
    FOREIGN KEY (`trademarks_id`)
    REFERENCES `DBGrupo5`.`trademarks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_families1`
    FOREIGN KEY (`families_id`)
    REFERENCES `DBGrupo5`.`families` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_warranties1`
    FOREIGN KEY (`warranties_id`)
    REFERENCES `DBGrupo5`.`warranties` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBGrupo5`.`product_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DBGrupo5`.`product_images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` TEXT NOT NULL,
  `is_primary` VARCHAR(45) NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`, `products_id`),
  INDEX `fk_product_images_products1_idx` (`products_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_images_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `DBGrupo5`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
