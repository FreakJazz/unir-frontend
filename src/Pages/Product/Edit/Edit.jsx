import { IonLabel } from '@ionic/react';
import { PageWrapper } from '../../../Components/PageWrapper/Component';
import CreateProductForm from '../../../Components/ProductNew/Component';
const Edit = () => {
	return (
		<PageWrapper title="Home">
			<IonLabel>Editar producto</IonLabel>
			<CreateProductForm/>
		</PageWrapper>
	);
};

export default Edit;