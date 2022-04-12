import React from "react";

import "./TableItemPM.css";
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';

const TableItemPM = () => {
  return (
    <tr>
      <th scope="row">123</th>
      <td>
        <img
          src="https://doblevela.com/images/large/A2770_lrg.jpg"
          class="img-fluid rounded-start img-card-h"
          alt="..."
        />
      </td>
      <td>Nombre del producto</td>
      <td>$100</td>
      <td className="actions-section">
        <a type="button" class="btn btn-primary"><FiEdit /></a>
        <a type="button" class="btn btn-danger"><AiFillDelete /></a>
      </td>
    </tr>
  );
};

export default TableItemPM;
