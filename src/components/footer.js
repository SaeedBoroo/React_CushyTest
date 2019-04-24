import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return (<>

            <div className="container-fluid bg-light py-2">
                <div className="container">
                    <div class="nav justify-content-center">
                        اپلیکیشن ریکت کوشی | {new Date().getFullYear()}
                    </div>
                </div>
            </div>


        </>);
    }
}

export default Footer;
