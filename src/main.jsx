import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ConfigProvider
			theme={{
				token: {
					borderRadius: 20,
					borderRadiusSM: 20,
					borderRadiusXS: 20,
					colorPrimary: "#024B59",
					colorSecondary: "#AB172F",
				},
			
			}}>
			<Auth0Provider
				domain="dev-r85is3s0gdynccjy.eu.auth0.com"
				clientId="OTqs67fdnQhgjhJHCNjDXsz15ngesR4D"
				authorizationParams={{
					audience: "http://localhost:8080",
					redirect_uri: window.location.origin,
				}}>
				<App />
			</Auth0Provider>
		</ConfigProvider>
	</Provider>
);
