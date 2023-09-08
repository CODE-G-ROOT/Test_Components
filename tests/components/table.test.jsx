import { render } from "@testing-library/react"
import Table from '../../src/components/Table'

describe("Captura del componente <Tablla.jsx>", ()=>{
    test("Fotico", ()=> {
        let {container} = render(<Table/>);
        expect(container).toMatchSnapshot();
    });
});