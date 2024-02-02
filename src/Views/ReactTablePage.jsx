import React from "react";
import ReactTable from "../components/react-table/ReactTable";
import { tableData } from "../utils/fixture";

const ReactTablePage = () => {
    const tableHeader = [
        {
            key: "id",
            title: "ID",
            type: "jsx",
            renderer: (item) => `#${item["id"]}`,
            td_class: "col-xs text-muted",
            th_class: "col-xs",
            total_count: 10
        },

        {
            key: "",
            title: "User",
            src: "image",
            type: "profile",
            first_name: "firstName",
            last_name: "lastName",
            user_id: "user_id",
            handleClick: (item) => {}
        },
        {
            key: "username",
            title: "Username",
            type: "string"
        },
        { key: "age", title: "age", type: "number", th_class: "col-xs align-center", td_class: "col-xs align-center" },
        { key: "gender", title: "gender", type: "string", th_class: "col-sm align-center", td_class: "col-sm align-center" },

        { key: "email", title: "email", type: "string" },
        { key: "phone", title: "phone", type: "string" },
        { key: "birthDate", title: "Birth Date", type: "string", td_class: "col-sm",
        th_class: "col-sm", },
        { key: "bloodGroup", title: "Blood Group", type: "string", th_class: "col-sm align-center", td_class: "col-sm align-center" },
        { key: "height", title: "height", type: "number", suffix: " cm" },
        { key: "weight", title: "weight", type: "number", suffix: " kg" },
        { key: "eyeColor", title: "Eye Color", type: "color" },
        { key: "hair", title: "hair", type: "jsx", renderer: (item) => `${item.hair?.color} - ${item.hair?.type}` },
        { key: "ip", title: "ip", type: "string" },
        { key: "macAddress", title: "Mac Address", type: "string" },
        {
            key: "address",
            title: "address",
            type: "jsx",
            th_class: "col-lg",
            td_class: "col-lg",
            renderer: (item) => `${item.address?.address}, ${item.address?.city}, ${item.address?.postalCode}, ${item.address?.state}`
        },
        { key: "university", title: "university", type: "string" },
        {
            key: "bank",
            title: "bank",
            type: "button",
            custom_title: "View",
            handleClick: (item) => {},
            th_class: "align-center",
            td_class: "align-center"
        },
        { key: "company", title: "company", type: "jsx", renderer: (item) => `${item.company?.name}` },
        { key: "ein", title: "ein", type: "string" },
        { key: "ssn", title: "ssn", type: "string" },
        { key: "userAgent", title: "user Agent", type: "string", th_class: "col-xl", td_class: "col-xl" }
        // { key: "crypto", title: "crypto", type: "string" },
    ];
    return (
        <div className="">
            <h3>React Table</h3>
            <div className="card_shadow p-2">
                <ReactTable headers={tableHeader} data={tableData} tr_class="align-items-start" />
            </div>
        </div>
    );
};

export default ReactTablePage;
