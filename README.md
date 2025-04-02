# 📌 Project Documentation

## 🛍️ Product API

Ce projet est une API de gestion de produits avec authentification sécurisée.

### 🚀 Technologies utilisées
- **Java 17**
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



  ## 🔥 Importer la collection Postman

Pour tester facilement les API, vous pouvez utiliser Postman et importer la collection de requêtes déjà configurée.

### 📥 Étapes d'importation :
1. **Téléchargez la collection Postman** :  
   [API_alten.postman_collection.json](./API_alten.postman_collection.json) (Ajoutez ce fichier à la racine du projet)
   
2. **Ouvrez Postman** et cliquez sur **"Import"**.

3. **Sélectionnez le fichier JSON** téléchargé.

4. **Importez la collection** et utilisez les requêtes pour tester l'API. 

🔑 **Remarque :** Pensez à mettre à jour le token dans les requêtes nécessitant une authentification.



-----------------------------------------------

# Consignes

- Vous êtes développeur front-end : vous devez réaliser les consignes décrites dans le chapitre [Front-end](#Front-end)

- Vous êtes développeur back-end : vous devez réaliser les consignes décrites dans le chapitre [Back-end](#Back-end) (*)

- Vous êtes développeur full-stack : vous devez réaliser les consignes décrites dans le chapitre [Front-end](#Front-end) et le chapitre [Back-end](#Back-end) (*)

(*) Afin de tester votre API, veuillez proposer une stratégie de test appropriée.

## Front-end

Le site de e-commerce d'Alten a besoin de s'enrichir de nouvelles fonctionnalités.

### Partie 1 : Shop

- Afficher toutes les informations pertinentes d'un produit sur la liste
- Permettre d'ajouter un produit au panier depuis la liste 
- Permettre de supprimer un produit du panier
- Afficher un badge indiquant la quantité de produits dans le panier
- Permettre de visualiser la liste des produits qui composent le panier.

### Partie 2

- Créer un nouveau point de menu dans la barre latérale ("Contact")
- Créer une page "Contact" affichant un formulaire
- Le formulaire doit permettre de saisir son email, un message et de cliquer sur "Envoyer"
- Email et message doivent être obligatoirement remplis, message doit être inférieur à 300 caractères.
- Quand le message a été envoyé, afficher un message à l'utilisateur : "Demande de contact envoyée avec succès".

### Bonus : 

- Ajouter un système de pagination et/ou de filtrage sur la liste des produits
- On doit pouvoir visualiser et ajuster la quantité des produits depuis la liste et depuis le panier 

## Back-end

### Partie 1

Développer un back-end permettant la gestion de produits définis plus bas.
Vous pouvez utiliser la technologie de votre choix parmi la liste suivante :

- Node.js/Express
- Java/Spring Boot
- C#/.net Core
- PHP/Symphony : Utilisation d'API Platform interdite


Le back-end doit gérer les API suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new product  | Retrieve all products          | X                                        | X   |     X            |
| **/products/:id**  | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes : 

``` typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  internalReference: string;
  shellId: number;
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
  rating: number;
  createdAt: number;
  updatedAt: number;
}
```

Le back-end créé doit pouvoir gérer les produits dans une base de données SQL/NoSQL ou dans un fichier json.

### Partie 2

- Imposer à l'utilisateur de se connecter pour accéder à l'API.
  La connexion doit être gérée en utilisant un token JWT.  
  Deux routes devront être créées :
  * [POST] /account -> Permet de créer un nouveau compte pour un utilisateur avec les informations fournies par la requête.   
    Payload attendu : 
    ```
    {
      username: string,
      firstname: string,
      email: string,
      password: string
    }
    ```
  * [POST] /token -> Permet de se connecter à l'application.  
    Payload attendu :  
    ```
    {
      email: string,
      password: string
    }
    ```
    Une vérification devra être effectuée parmi tout les utilisateurs de l'application afin de connecter celui qui correspond aux infos fournies. Un token JWT sera renvoyé en retour de la reqûete.
- Faire en sorte que seul l'utilisateur ayant le mail "admin@admin.com" puisse ajouter, modifier ou supprimer des produits. Une solution simple et générique devra être utilisée. Il n'est pas nécessaire de mettre en place une gestion des accès basée sur les rôles.
- Ajouter la possibilité pour un utilisateur de gérer un panier d'achat pouvant contenir des produits.
- Ajouter la possibilité pour un utilisateur de gérer une liste d'envie pouvant contenir des produits.

## Bonus

Vous pouvez ajouter des tests Postman ou Swagger pour valider votre API