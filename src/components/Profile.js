import { Page, Form, Container, StyleLink, StyleTbCameraPlus, InputNone, Titulo } from "@/styles/styledComponents";
import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/navigation';
import { useProfileImage, useProfileName } from '@/hooks/api/useProfile';
import { UserContext } from "@/contexts/UserContext";

export default function Profile() {
    const { profileImage } = useProfileImage();
    const { profileName } = useProfileName();
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const [click, setClick] = useState(false);
    const router = useRouter();
    const imageMimeType = /image\/(png|jpg|jpeg)/i;
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const { userData, setUserData } = useContext(UserContext);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (userData.user.image && !fileDataURL && !file) {
            setImageUrl(`${process.env.REACT_APP_API_BASE_URL}/uploads/${userData.user.image}`);
        }
        if (userData.user.name && !name) {
            setName(userData.user.name);
        }
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [file]);

    const changeHandler = (e) => {
        const fileInput = e.target.files[0];
        if (!fileInput.type.match(imageMimeType)) {
            alert("Arquivo não é do tipo válido!");
            return 0;
        }
        setImageUrl(null);
        setFile(fileInput);
    }

    async function profileButton(event) {
        event.preventDefault();
        setClick(true);
        setError('');
        let userImage, userName
        try {
            if (file) {
                try {
                    const formData = new FormData();
                    formData.append("image", file);
                    userImage = await profileImage(formData);
                } catch (error) {
                    setError('Imagem inválida');
                    console.log(err);
                }
            }
            if (userData.user.name !== name) {
                try {
                    userName = await profileName({ name });
                } catch (error) {
                    setError('Nome inválido');
                    console.log(err);
                }

            }
            if (!userImage) userImage = { image: userData.user.image };
            if (!userName) userName = { name: userData.user.name };
            setName("");
            setFile(null);
            setFileDataURL(null);
            setUserData({ user: { ...userData.user, image: userImage.image, name: userName.name }, token: userData.token });
            router.push('/');
        } catch (err) {
            console.log(err);
        }
        setClick(false);
    }

    return (
        <Page>
            <Container>
                <Titulo>Perfil</Titulo>
                <Form onSubmit={profileButton} click={click} error={error} filedataurl={fileDataURL || imageUrl}>
                    <label tabIndex="0" htmlFor="inputImage">
                        <StyleTbCameraPlus filedataurl={fileDataURL || imageUrl} />
                        <img src={imageUrl ? imageUrl : fileDataURL} alt=""></img>
                    </label>
                    <InputNone disabled={click} type="file" accept="image/*" onChange={changeHandler} id="inputImage" />
                    <input disabled={click} type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />

                    <span>{error}</span>

                    <button disabled={click} type="submit">Salvar</button>

                    <StyleLink href="/">Talvez depois</StyleLink>
                </Form>
            </Container>
        </Page>
    );
}
