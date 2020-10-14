import React, { useState } from 'react';

import Root from '@vkontakte/vkui/dist/components/Root/Root';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import '@vkontakte/vkui/dist/vkui.css';


const App = () => {
	const [activeView, setActiveView] = useState('main');
	const [activePanel, setActivePanel] = useState({'main': 'home'});

	const go = e => {
		setActivePanel(prevAP => {
			prevAP.main = e.currentTarget.dataset.to;
			return prevAP;
		});
		console.log(activePanel);
	};

	return (
		<Root activeView={activeView}>
			<View id="main" activePanel={activePanel.main}>
				<Panel id="home">
				    <PanelHeader>
				        Home
				    </PanelHeader>
				    <Button onClick={go} data-to="about">About</Button>
				</Panel>
				<Panel id="about">
				    <PanelHeader>
				        About
				    </PanelHeader>
				</Panel>
			</View>
		</Root>
	);
}

export default App;