import { FC } from "react";
import styles from "./mytable.module.css";

interface MyTableProps {
    skin?: "primary" | "secondary";
    tableData: {
        head: string[];
        body: string[][];
        buttons: Array<{ title: string; onClick: () => void }>;
        icons: JSX.Element[];
    };
}

const MyTable: FC<MyTableProps> = ({ skin = "secondary", tableData }) => {
    return (
        <table className={styles.myTable}>
            <thead
                className={`${styles.myThead} ${
                    skin === "primary" ? styles.blue : styles.green
                }`}
            >
                <tr>
                    {tableData.head.map((el) => {
                        return <th>{el}</th>;
                    })}
                    {tableData.buttons.map(() => {
                        return <th></th>;
                    })}
                    {tableData.icons.map(() => {
                        return <th></th>;
                    })}
                </tr>
            </thead>
            <tbody
                className={`${styles.myTbody} ${
                    skin === "primary" ? styles.blue : styles.green
                }`}
            >
                {tableData.body.map((row) => {
                    return (
                        <tr>
                            {row.map((cell) => {
                                return <td>{cell}</td>;
                            })}
                            {tableData.buttons.map((el) => {
                                return (
                                    <td
                                        className={
                                            skin === "primary"
                                                ? styles.buttonCellBlue
                                                : styles.buttonCellGreen
                                        }
                                        onClick={el.onClick}
                                    >
                                        {el.title}
                                    </td>
                                );
                            })}
                            {tableData.icons.map((el) => {
                                return <td>{el}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export { MyTable };
