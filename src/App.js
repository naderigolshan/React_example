import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import CustomTheme from "./assets/CustomTheme";
import './assets/styles.css'
import {Typography} from "@material-ui/core";
import Header from "./components/header_footer/Header";
import Product from "./components/products";
import ProductInfo from "./components/pro_info";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import {Element} from "react-scroll";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

function App() {
    return (
        <ThemeProvider theme={CustomTheme}>
            <StylesProvider jss={jss}>
                <Header/>
                <Element name="Product">
                    <Product/>
                </Element>
                <Element name="ProductInfo">
                    <ProductInfo/>
                </Element>
                <Element name="Highlights">
                    <Highlights/>
                </Element>
                <Element name="Pricing">
                    <Pricing />
                </Element>
                <Element name="Location">
                    <Location />
                </Element>

                {/*<Product/>*/}
                {/*<ProductInfo/>*/}
                {/*<Highlights/>*/}
                {/*<Pricing />*/}
                {/*<Location />*/}
                <Footer />

                <Typography variant="body1">

                </Typography>

            </StylesProvider>
        </ThemeProvider>

    );
}

export default App;
