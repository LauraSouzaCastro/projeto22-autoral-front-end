import { Page, Form, Container, StyleLink, StyleTbCameraPlus, InputNone, Titulo } from "@/styles/styledComponents";
import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/navigation';
import useProfile from '@/hooks/api/useProfile';
import { UserContext } from "@/contexts/UserContext";

export default function Profile() {
    const { profile } = useProfile();
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const [click, setClick] = useState(false);
    const router = useRouter();
    const imageMimeType = /image\/(png|jpg|jpeg)/i;
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
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
        setFile(fileInput);
    }

    async function profileButton(event) {
        event.preventDefault();
        setClick(true);
        setError('');
        try {
            const formData = new FormData();
            formData.append("image", file);
            formData.append("name", name);
            const user = await profile(formData);
            setName("");
            setFile(null);
            setFileDataURL(null);
            setUserData({ user: { ...userData.user, image: user.image, name: user.name }, token: userData.token });
            router.push('/');
        } catch (err) {
            setError('Imagem ou nome inválido');
            console.log(err);
        }
        setClick(false);
    }

    return (
        <Page>
            <Container>
                <Titulo>Perfil</Titulo>
                <Form onSubmit={profileButton} click={click} error={error} filedataurl={fileDataURL}>
                    <label tabIndex="0" htmlFor="inputImage">
                        <StyleTbCameraPlus filedataurl={fileDataURL} />
                        <img src={fileDataURL} alt=""></img>
                    </label>
                    <InputNone disabled={click} required type="file" accept="image/*" onChange={changeHandler} id="inputImage" />
                    <input disabled={click} required type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />

                    <span>{error}</span>

                    <button disabled={click} type="submit">Salvar</button>

                    <StyleLink href="/">Talvez depois</StyleLink>
                </Form>
            </Container>
        </Page>
    );
}
