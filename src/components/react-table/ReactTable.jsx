import moment from "moment";
import React from "react";
import "./react-table.css";

const ReactTable = (props) => {
    return (
        <div className="table_container smooth-scroller">
            <table>
                <thead>
                    <tr>
                        {props.headers?.map((th, thIndex) => (
                            <th key={thIndex} className={`smoketitle ${th.th_class || ""}`}>
                                {th.title}
                                {th.total_count ? ` (${th.total_count})` : ""}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data?.map((item, index) => (
                        <tr key={index} className={props.tr_class || ""} onClick={() => props.onRowClick?.(item)}>
                            {props.headers?.map((th, thIndex) => {
                                if (th.type === "link") {
                                    return (
                                        <td key={thIndex} className={`td_class ${th.td_class || ""}`}>
                                            <button aria-label="link" onClick={() => th.handleClick?.(item)} className="text-link">
                                                {th.custom_title}
                                            </button>
                                        </td>
                                    );
                                } else if (th.type === "button") {
                                    return (
                                        <td key={thIndex} className={`td_class ${th.td_class || ""}`}>
                                            {th.custom_title ? (
                                                <button onClick={() => th.handleClick?.(item)} className="btn primary">
                                                    {th.custom_title}
                                                </button>
                                            ) : (
                                                <button onClick={() => th.handleClick?.(item)} className="btn primary">
                                                    {item[th.key]}
                                                </button>
                                            )}
                                        </td>
                                    );
                                } else if (th.type === "currency") {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {!item[th.key] ? "-" : +item[th.key]}
                                        </td>
                                    );
                                } else if (th.type === "date") {
                                    let date = (item[th.key] && String(item[th.key])) || "";
                                    date = date.split("-")[0]?.length === 6 ? `20${date}` : date;

                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {date ? moment(date).format("YYYY-MM-DD") : "-"}
                                        </td>
                                    );
                                } else if (th.type === "time") {
                                    let time = (item[th.key] && String(item[th.key])) || "";
                                    let hh = time.slice(-6, -4);
                                    let mm = time.slice(-4, -2);
                                    let ss = time.slice(-2);
                                    let time_string = `${hh}:${mm}:${ss}`;
                                    let moment_time = moment(time_string, "HH:mm:ss");
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {moment_time.format("h:mm A") || "-"}
                                        </td>
                                    );
                                } else if (th.type === "jsx") {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {th.renderer?.(item)}
                                        </td>
                                    );
                                } else if (th.type === "boolean") {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {item[th.key] ? "Yes" : "No"}
                                        </td>
                                    );
                                } else if (th.type === "profile") {
                                    return (
                                        <td key={thIndex} className={`td_class ${th.td_class || ""}`}>
                                            <label className="profile_cont" onClick={() => th.handleClick?.(item)}>
                                                <img
                                                    src={item[th.src]}
                                                    id={item[th.key]}
                                                    height={"28px"}
                                                    width={"28px"}
                                                    fontSize="small"
                                                    className="profile_image"
                                                    alt={item[th.key] || ""}
                                                />
                                                <label onClick={() => th.handleClick?.(item)} className="ml-2 mb-0 pointer">
                                                    {item[th.key]
                                                        ? item[th.key]
                                                        : item[th.first_name]
                                                        ? `${item[th.first_name]} ${item[th.last_name]}`
                                                        : "-"}
                                                </label>
                                            </label>
                                        </td>
                                    );
                                } else if (th.type === "number") {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            {!item[th.key] ? (
                                                "-"
                                            ) : (
                                                <>
                                                    {item[th.key]}
                                                    {th.suffix || ""}
                                                </>
                                            )}
                                        </td>
                                    );
                                } else if (th.type === "color") {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            <div style={{ color: item[th.color || th.key] }}>{item[th.key]}</div>
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={thIndex} onClick={() => th.handleClick?.(item)} className={`td_class ${th.td_class || ""}`}>
                                            <span title={item[th.key]} className="line-clamp-2">
                                                {typeof item[th.key] === "string" ? item[th.key].trim() || "-" : item[th.key] || "-"}
                                            </span>
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReactTable;
