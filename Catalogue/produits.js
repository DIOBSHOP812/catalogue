// Configuration des produits DIOBSHOP
// Modifiez facilement les images, prix et noms des articles ici

const catalogueProduits = {
    // Articles disponibles en stock
    available: [
        {
            id: 'av1',
            name: 'Smartphone Samsung Galaxy',
            price: 125000,
            image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop',
            category: 'available'
        },
        {
            id: 'av2',
            name: 'Ordinateur Portable HP',
            price: 350000,
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
            category: 'available'
        },
        {
            id: 'av3',
            name: 'Casque Audio Bluetooth',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
            category: 'available'
        },
        {
            id: 'av4',
            name: 'Montre Connectée',
            price: 75000,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
            category: 'available'
        },
        {
            id: 'av5',
            name: 'Tablette iPad',
            price: 280000,
            image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop',
            category: 'available'
        }
    ],

    // Articles sous commande spéciale
    specialOrder: [
        {
            id: 'sp1',
            name: 'MacBook Pro 16 pouces',
            price: 1250000,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop',
            category: 'special'
        },
        {
            id: 'sp2',
            name: 'iPhone 15 Pro Max',
            price: 850000,
            image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=300&h=200&fit=crop',
            category: 'special'
        },
        {
            id: 'sp3',
            name: 'Caméra Canon EOS R5',
            price: 2200000,
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop',
            category: 'special'
        },
        {
            id: 'sp4',
            name: 'Gaming PC Haut de Gamme',
            price: 1800000,
            image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=200&fit=crop',
            category: 'special'
        },
        {
            id: 'sp5',
            name: 'Drone DJI Mavic Pro',
            price: 650000,
            image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop',
            category: 'special'
        }
    ],

    // Livres adultes (18+)
    adultBooks: [
        {
            id: 'ab1',
            name: 'Roman Érotique Classique',
            price: 15000,
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
            category: 'adult'
        },
        {
            id: 'ab2',
            name: 'Guide Intime Moderne',
            price: 18000,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
            category: 'adult'
        },
        {
            id: 'ab3',
            name: 'Collection Passion',
            price: 22000,
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
            category: 'adult'
        },
        {
            id: 'ab4',
            name: 'Livre Numérique Sensuel',
            price: 12000,
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
            category: 'adult'
        },
        {
            id: 'ab5',
            name: 'Manuel Intime Illustré',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
            category: 'adult'
        }
    ]
};

// Instructions pour modifier les produits:
// 1. Pour changer le nom: modifiez la propriété "name"
// 2. Pour changer le prix: modifiez la propriété "price" (en FCFA)
// 3. Pour changer l'image: remplacez l'URL dans la propriété "image"
// 4. Pour ajouter un produit: copiez un objet existant et modifiez l'ID et les propriétés
// 5. Pour supprimer un produit: supprimez l'objet complet (attention aux virgules)

// Export pour utilisation dans le fichier HTML principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = catalogueProduits;
}