import styled from "styled-components/native";
import colors from "../../views/Theme/colors";

const ContainerLoginCadastro = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    padding: 50px 10px;
`;

const LogoBemVindo = styled.Image`
    width: 200px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 30px;
`;

export {
    ContainerLoginCadastro,
    LogoBemVindo,
};