import React from 'react';

const RenderComponent = React.lazy(
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => resolve(import(`AppOne`)), 100)
        )
);

const AppTwo = () => {
    return (
        <div>
            App - Two
            <RenderComponent/>
        </div>
    );
};

export default AppTwo;
