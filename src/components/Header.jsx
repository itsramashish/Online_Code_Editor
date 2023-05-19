

import { AppBar, Toolbar, styled } from '@mui/material';
import { fontFamily } from '@mui/system';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {
    return (
        <Container position="static">
            <Toolbar>
                <h2>Online Text Editor Using React.js</h2>
            </Toolbar>
        </Container>
    )
}

export default Header;
