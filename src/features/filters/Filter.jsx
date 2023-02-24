import styled from 'styled-components';

import useFilter from './useFilter';

const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 80px;
    background-color: var(--colors-bg);
    border-radius: var(--radii);
    background-color: var(--colors-list-bg);
    height: 65px;
    box-shadow: var(--shadow);
    @media (max-width: 768px) {
        height: 45px;
        padding-top: 10px;
    }
`;

const FilterElem = styled.span`
    margin: auto 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;
const Span = styled.span`
height: 100%;
font-size: var(--fs-md);
font-weight: var(--fw-bold);
cursor: pointer;
color: var(--colors-text-title);
    :hover  {
        color: var(--colors-title_hover);
    }
`;

const Filter = () => {
    const [activeFilter, handleFilter] = useFilter();
    
    return (
        <Wrapper>
            <FilterElem>
                <Span
                    style={{
                        color:
                            activeFilter === 'All'
                                ? 'var(--colors-main)'
                                : '',
                    }}
                    onClick={() => handleFilter('All')}
                >
                    All
                </Span>
                <Span
                    style={{
                        color:
                            activeFilter === 'Active'
                                ? 'var(--colors-main)'
                                : '',
                    }}
                    onClick={() => handleFilter('Active')}
                >
                    Active
                </Span>
                <Span
                    style={{
                        color:
                            activeFilter === 'Completed'
                                ? 'var(--colors-main)'
                                : '',
                    }}
                    onClick={() => handleFilter('Completed')}
                >
                    Completed
                </Span>
            </FilterElem>
        </Wrapper>
    );
};

export default Filter;
