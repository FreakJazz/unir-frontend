import React, { useEffect, useState } from 'react';
import { IonButton, IonInput, IonLabel, IonSelect, IonSelectOption, IonIcon, IonImg } from '@ionic/react';
import { categoryOptions } from '../../Constants/products';
import { cameraOutline } from 'ionicons/icons';
import './Component.scss';

const EditProductForm = ({productId}) => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({});

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


    useEffect(() => {
        try{
            const data = axios
            .get(`${API_URL}/products/${productId}`, {
            })
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
    
            })
            return data;
        }
        catch(e){
            console.error(e.message);
        }
  }, [])
    

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui tocariia agregar la api de creacion de producto
    setName('');
    setCategory('');
    setPrice(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} className="create-product-form" onSubmit={handleSubmit}>
      <IonLabel>
        Nombre:
        <IonInput
          type="text"
          value={name}
          onIonChange={(e) => setName(e.target.value)}
          required
        ></IonInput>
      </IonLabel>

      <IonLabel>
        Categoría:
        <IonSelect value={category} type="selector" onIonChange={handleCategoryChange}>
        {categoryOptions.map((option) => (
          <IonSelectOption key={option.value} value={option.value}>
            {option.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonLabel>

      <IonLabel>
        Precio:
        <IonInput
          type="number"
          value={price}
          onIonChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        ></IonInput>
      </IonLabel>

      <IonLabel>
        Cantidad:
        <IonInput
          type="number"
          value={quantity}
          onIonChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        ></IonInput>
      </IonLabel>
      
      <div style={{ marginBottom: '1rem' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="image-upload" />
      <label htmlFor="image-upload">
        <IonButton expand="full">
          <IonIcon icon={cameraOutline} slot="start" />
          Imagen
        </IonButton>
      </label>
      {image && <IonImg src={image} style={{ marginTop: '1rem' }} />}
    </div>

      <IonButton type="submit">Guardar Producto</IonButton>
    </form>
  );
};

export default EditProductForm;