## COMMENT LANCER CE PROJET

### Lancer le projet backend

1. **Clonez le dépôt :** 
git clone https://github.com/sdore2021/alten.git

2. **Accédez au répertoire du backend :** 
cd alten/back/doto-backend

4. **Exécutez Maven pour construire le projet (en sautant les tests) :**
mvn clean install -DskipTests
   

4. **Lancez le jar exécutable :**
java -jar ./target/doto-backend-0.0.1-SNAPSHOT.jar


la documentation existe sur le lien : http://localhost:8080/swagger-ui/index.html



### Lancer le projet frontend

1. **Accédez au répertoire du frontend :**
cd alten/front


2. **Installez les dépendances avec npm :**
npm install


3. **Lancez le serveur de développement Angular :**
ng serve


Une fois lancé, vous pouvez accéder au projet via l'URL : [http://localhost:4200/](http://localhost:4200/)


4. **INFORMATION DE CONNEXION :**
compte: admin@admin.fr mdp: admin



---

**Informations optionnelles :**
- Les données sont stockés sur la base H2 pre-replire
- Pour accéder à la base de données H2 intégrée utilisée par le projet backend, vous pouvez vous connecter via l'URL suivante : [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- Les paramètres de connexion de la base de données H2 sont :
- JDBC URL : jdbc:h2:mem:tododb
- Nom d'utilisateur : todo
- Mot de passe : todo


# 📌 Project Documentation

## 🛍️ Product API

Ce projet est une API de gestion de produits avec authentification sécurisée.

### 🚀 Technologies utilisées
- **Java 8**
- **Spring Boot** (Spring Security, Spring Data JPA)
- **JWT** (Json Web Token)
- **Swagger** (Documentation API)
- **H2 Database** (Base de données en mémoire)
- **Git & GitHub** (Gestion de version)

## 📖 Endpoints de l'API

### 🛒 Product Controller

#### ➤ Ajouter un produit (Administrateur uniquement)
**POST** `/product/onlyAdmin`

#### ➤ Récupérer tous les produits
**GET** `/product`

#### ➤ Récupérer un produit par ID
**GET** `/product/{id}`

#### ➤ Supprimer un produit (Administrateur uniquement)
**DELETE** `/product/onlyAdmin/{id}`

---

### 🔐 Authentication Controller

#### ➤ Générer un token JWT
**POST** `/auth/token`

#### ➤ Créer un compte utilisateur
**POST** `/auth/account`

---

## 🛠️ Installation et exécution

1. **Cloner le projet**
   ```sh
   git clone https://github.com/sdore2021/alten.git
   cd alten
   ```

2. **Construire et exécuter l'application**
   ```sh
   mvn spring-boot:run
   ```

3. **Accéder à l'API via Swagger**
   - [Swagger UI](http://localhost:8080/swagger-ui/index.html)

---

## ✅ Authentification JWT

Ajoutez le token JWT dans l'en-tête des requêtes protégées :
```
Authorization: Bearer <votre_token_jwt>
```

---

## COMMENT LANCER CE PROJET

### Lancer le projet backend

1. **Clonez le dépôt :** 
   ```sh
   git clone https://github.com/sdore2021/alten.git
   ```

2. **Accédez au répertoire du backend :** 
   ```sh
   cd alten/back/doto-backend
   ```

3. **Exécutez Maven pour construire le projet (en sautant les tests) :**
   ```sh
   mvn clean install -DskipTests
   ```

4. **Lancez le jar exécutable :**
   ```sh
   java -jar ./target/doto-backend-0.0.1-SNAPSHOT.jar
   ```

La documentation existe sur le lien : [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

### Lancer le projet frontend

1. **Accédez au répertoire du frontend :**
   ```sh
   cd alten/front
   ```

2. **Installez les dépendances avec npm :**
   ```sh
   npm install
   ```

3. **Lancez le serveur de développement Angular :**
   ```sh
   ng serve
   ```

Une fois lancé, vous pouvez accéder au projet via l'URL : [http://localhost:4200/](http://localhost:4200/)

### 🛠️ INFORMATION DE CONNEXION :
- **Compte :** `admin@admin.fr`
- **Mot de passe :** `admin`

---

**Informations optionnelles :**
- Les données sont stockées sur la base H2 pré-remplie
- Pour accéder à la base de données H2 intégrée utilisée par le projet backend, vous pouvez vous connecter via l'URL suivante : [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- **Les paramètres de connexion de la base de données H2 sont :**
  - **JDBC URL :** `jdbc:h2:mem:tododb`
  - **Nom d'utilisateur :** `todo`
  - **Mot de passe :** `todo`

---
