import styled from 'styled-components';
import './App.css';
import MainHeader from './components/layout/MainHeader';
import Task1UI from './components/taskDemos/Task1UI';
import Task2UI from './components/taskDemos/Task2UI';
import Task3UI from './components/taskDemos/Task3UI';
import Task4UI from './components/taskDemos/Task4UI';
import Task5UI from './components/taskDemos/Task5UI';
import Task6UI from './components/taskDemos/Task6UI';

const StyledContainer = styled.section`
    padding: 1rem;

    display: flex;
    flex-flow: column nowrap;

    & > div {
        margin-bottom: 1rem;
    }

    @media all and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        & > div {
            margin-bottom: 0;
        }
    }

    @media all and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);

        & > div {
            margin-bottom: 0;
        }
    }
`;

const HeaderContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 1rem 0 1rem 2rem;
        font-size: 2.8em;
    }

    .desktop {
        display: none;
    }

    & > h2 {
        margin: 1rem 2rem 1rem 0;
        font-size: 2.4em;
        color: #555;
    }

    @media all and (min-width: 768px) {
        h1 {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
`;

function App() {
    return (
        <div className="App">
            <MainHeader>
                <HeaderContent>
                    <h1 className="desktop">Roam Frontend Assessment</h1>
                    <h1>Roam</h1>
                    <h2>JP Yepez</h2>
                </HeaderContent>
            </MainHeader>
            <StyledContainer>
                <Task1UI />
                <Task2UI />
                <Task3UI />
                <Task4UI />
                <Task5UI />
                <Task6UI />
            </StyledContainer>
        </div>
    );
}

export default App;
