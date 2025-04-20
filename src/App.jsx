import "./styles.css";
import axios from "axios";

export default function App() {


  const downloadFile = async () => { // İndirme fonksiyonumuzu oluşturuyoruz.
    try {
      const response = await axios({ // Axios GET isteği gönderiyoruz.
        url: 'http://example.com/file.pdf', // İndirilecek dosyanın URL'sini belirtiyoruz.
        method: 'GET', // GET isteği kullanacağımızı belirtiyoruz.
        responseType: 'blob', // İndirilecek dosya binary data olduğu için responseType olarak 'blob' kullanıyoruz.
      });
      const url = window.URL.createObjectURL(new Blob([response.data])); // İndirilen dosyanın binary datalarını blob olarak oluşturuyoruz.
      const link = document.createElement('a'); // <a> elementi oluşturuyoruz.
      link.href = url; // Oluşturulan blob URL'sini <a> elementinin href özelliğine ekliyoruz.
      link.setAttribute('download', 'file.pdf'); // Dosyanın kaydedileceği adı belirliyoruz.
      document.body.appendChild(link); // <a> elementini sayfaya ekliyoruz.
      link.click(); // <a> elementine tıklama işlemini programatik olarak gerçekleştiriyoruz.
    } catch (error) { // Hata durumunda hatayı konsola yazdırıyoruz.
      console.error(error)
    }



  return (
    <div>
      <button onClick={downloadFile}>Dosyayı İndir</button>
    </div>
  );
}
