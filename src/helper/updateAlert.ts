import Swal from "sweetalert2";
import { UpdateStatusRequest } from "../APIRequest/apiRequest";
export function UpdateAlertTodo(id: string, status: string) {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: { New: "New", Progress: "Progress", Completed: "Completed" ,Canceled: "Canceled"}, 
    inputValue: status,
  }).then((result) => {
    return UpdateStatusRequest(id, result.value).then((res) => {
      return res;
    })
  })
}