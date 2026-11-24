Table : CATEGORIE
-----------------
code_categorie (PK)
nom_categorie

Table : CLIENT
--------------
Code_client (PK)
nom_client
prenom_client
email_client
telephone_client

Table : REPAS
-------------
Code_repas (PK)
Nom_repas
description_repas
prix_repas

Table : COMMANDE
----------------
code_commande (PK)
date_commande
heure_commande
statut_commande
Code_client (FK)

Table : APPARTIENT
------------------
Code_repas (PK, FK)
code_categorie (PK, FK)

Table : CONTENIR
----------------
code_commande (PK, FK)
Code_repas (PK, FK)
quantite_cmd
prix_unitaire_cmd
