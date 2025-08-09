# Guide de Modification du Catalogue DIOBSHOP

## 📋 Comment modifier les produits facilement

### 1. Fichier principal : `produits.js`
Ce fichier contient tous les produits organisés en trois catégories :
- **available** : Articles disponibles en stock
- **specialOrder** : Articles sous commande spéciale 
- **adultBooks** : Livres adultes (18+)

### 2. Structure d'un produit
Chaque produit a cette structure :
```javascript
{
    id: 'identifiant_unique',    // Ne pas modifier
    name: 'Nom du produit',      // À modifier selon vos besoins
    price: 125000,               // Prix en FCFA
    image: 'https://...',        // URL de l'image du produit
    category: 'available'        // Ne pas modifier
}
```

### 3. Modifications courantes

#### ✏️ Changer le nom d'un produit
```javascript
name: 'Nouveau nom du produit'
```

#### 💰 Changer le prix
```javascript
price: 85000  // Nouveau prix en FCFA
```

#### 🖼️ Changer l'image
```javascript
image: 'https://nouvelle-url-image.jpg'
```

#### ➕ Ajouter un nouveau produit
1. Copiez un produit existant
2. Changez l'ID (ex: 'av6' pour available)
3. Modifiez nom, prix et image
4. Ajoutez une virgule après le produit précédent

#### ❌ Supprimer un produit
1. Supprimez tout l'objet du produit
2. Attention aux virgules (le dernier produit n'en a pas)

### 4. Sources d'images recommandées
- **Unsplash** : https://unsplash.com (images libres)
- **Pexels** : https://pexels.com (images libres)
- **Pixabay** : https://pixabay.com (images libres)

### 5. Bonnes pratiques
- Utilisez des images de qualité (minimum 300x200 pixels)
- Vérifiez que les URLs d'images fonctionnent
- Respectez les droits d'auteur des images
- Testez le site après chaque modification

### 6. Format des prix
- Toujours en FCFA (Franc CFA)
- Sans espaces ni virgules (ex: 125000 et non 125,000)
- Prix minimum recommandé pour commandes spéciales : 50000 FCFA

### ⚠️ Important
Après avoir modifié le fichier `produits.js`, actualisez votre navigateur pour voir les changements sur le site.