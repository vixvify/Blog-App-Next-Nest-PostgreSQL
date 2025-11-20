import Swal from "sweetalert2";
import { alert } from "../../../types/alert.type";

export async function ConfirmAlert({
  title,
  text,
  confirmText,
  complete,
  completeText,
}: alert) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText: "ยกเลิก",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: complete,
        text: completeText,
        icon: "success",
      });
    }
  });
}
