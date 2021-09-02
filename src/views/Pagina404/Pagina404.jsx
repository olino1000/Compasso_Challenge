import React from 'react';
import { FaQuestion, FaBoxOpen } from 'react-icons/fa';
import { ContainerError, ParagrafoError } from '../../styles';
import { errorLogo } from '../../styles/variaveis';

function Pagina404() {
	return (
		<ContainerError>
			<FaQuestion size={150} color={errorLogo} />
			<FaBoxOpen size={250} color={errorLogo} />
			<ParagrafoError>
				Página indisponível. Lamentamos o transtorno.
			</ParagrafoError>
		</ContainerError>
	);
}

export default Pagina404;
