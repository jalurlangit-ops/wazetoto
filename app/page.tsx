import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionItem } from './components/Accordion';
import { RiStarFill } from 'react-icons/ri';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <div className='mx-auto lg:w-2/3'>
            <div className=" container mx-auto flex flex-wrap md:p-5 flex-col md:flex-row items-center">
              <a className="max-sm:fixed flex title-font font-medium items-center text-gray-900 md:mb-0">
                <Image src='/logo.png' className='w-48 md:w-52 block' alt='Logo' width='230' height='80' />
              </a>
                <div className="max-sm:mt-32 max-sm:container md:ml-auto md:mr-auto flex items-center text-base justify-center gap-2">
                  <Link href='#' className='text-center w-52 max-sm:w-9/12 font-bold text-black px-6 py-2 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                      LOGIN
                  </Link>
                  <Link href='#' className='text-center w-52 max-sm:w-9/12 font-bold text-black px-6 py-2 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                      DAFTAR
                  </Link>
                </div>
            </div>

          <Image src='/banner.png' className='max-sm:mt-12 w-full block' alt='Banner' width={757} height={411} />
          <h1 className='my-6 text-center'>AGEN JUDI TOGEL ONLINE TERPERCAYA</h1>
          <div className='p-6 space-y-6 rounded-md glow-yellow mb-40'>
            <div className='flex flex-col'>
              <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full text-sm font-light border border-[#EACD00] text-surface'>
                      <thead className='font-medium border-b border-[#EACD00] bg-gradient-to-r from-[#2E2E2E] via-[#606060] to-[#2E2E2E] '>
                        <tr>
                          <th colSpan={2} scope='col' className='px-6 py-3 text-center border-2 border-e border-[#EACD00] '>
                            <h2>Informasi Situs Agen Slot Maxwin Online</h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b border-[#EACD00] grid-cols-4'>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Nama Situs</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Lanaya88</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Pasaran Togel Terbanyak</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Togel Hongkong, Sydney, Singapore, Malibu, China, Macau </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Minimal Deposit</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <Image src='/icon-redcircle.svg' className='size-4 aspect-square' width='16' height='16' alt='Red Circle' />
                              IDR 10.000
                            </div>
                          </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Metode Deposit	</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Transfer Bank, E-Wallet, QRIS Payment</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Daftar Slot Maxwin</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Klik disini</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Penilaian</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <div className='flex items-center gap-1'>
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                              </div>
                              7.918,204 User
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h1>Lanaya88 🔥 Situs Judi Resmi Deposit Dana Dan Slot Maxwin Terbesar!</h1>
            <p>
              Dalam dunia perjudian online yang dinamis, Lanaya88 telah muncul sebagai salah satu situs judi resmi yang menarik perhatian para pemain. Dikenal karena kemudahan dalam melakukan deposit menggunakan Dana dan menawarkan slot Maxwin terbesar, Lanaya88 menggabungkan kenyamanan, keamanan, dan keseruan dalam satu platform.
            </p>
            <p>
              Lanaya88 terbukti sebagai situs judi resmi yang menawarkan deposit Dana dan slot Maxwin terbesar, memberikan pengalaman bermain yang nyaman, aman, dan menguntungkan. Dengan kemudahan deposit, peluang kemenangan yang tinggi, antarmuka pengguna yang ramah, layanan pelanggan yang responsif, serta bonus dan promosi menarik, Lanaya88 adalah pilihan ideal bagi para pemain yang mencari platform judi online terbaik. Bergabunglah dengan Lanaya88 dan rasakan sendiri keunggulan dari salah satu situs judi terbesar dan terpercaya!
            </p>

            <h2>Mengenal Lebih Dekat Situs Judi Resmi</h2>
            <p>
            Situs judi resmi adalah platform perjudian online yang telah memperoleh lisensi dari badan pengawas yang sah dan diakui. Lisensi ini menunjukkan bahwa situs tersebut mematuhi peraturan dan standar industri yang ketat, termasuk persyaratan untuk keamanan, keadilan permainan, dan perlindungan data pemain. Situs judi resmi beroperasi dalam kerangka hukum yang jelas, memberikan pemain jaminan bahwa mereka bermain di lingkungan yang aman dan adil.
            </p>

            <p>
            Situs judi resmi akan menyediakan berbagai metode pembayaran yang aman dan terpercaya. Ini termasuk kartu kredit, transfer bank, e-wallet, dan metode pembayaran lokal seperti QRIS. Pastikan bahwa metode yang Anda pilih untuk melakukan transaksi didukung dan aman.
            </p>

            <p>
            Memilih situs judi resmi memastikan bahwa data pribadi dan dana Anda dilindungi dengan baik. Situs ini mematuhi standar keamanan tinggi dan sering kali memiliki kebijakan perlindungan pemain yang jelas.
            </p>

            <p>
            Memilih situs judi resmi adalah langkah penting untuk memastikan bahwa pengalaman perjudian online Anda aman, adil, dan menyenangkan. Dengan memeriksa lisensi, keamanan, metode pembayaran, dan dukungan pelanggan, Anda dapat menemukan platform yang tepat untuk bermain dengan tenang. Jangan terburu-buru dalam memilih, lakukan riset Anda, dan pilihlah situs judi yang memenuhi semua kriteria untuk mendapatkan pengalaman bermain yang optimal.
            </p>

            <h2>
            Keunggulan Deposit Dana Di Lanaya88
            </h2>

            <p>
            Salah satu keunggulan utama dari menggunakan Deposit Dana adalah kecepatan transaksi yang ditawarkannya. Deposit melalui Dana di Lanaya88 biasanya diproses secara instan, memungkinkan pemain untuk langsung bermain tanpa menunggu lama. Kecepatan ini sangat penting, terutama bagi mereka yang ingin segera memanfaatkan peluang dalam permainan yang sedang berlangsung.
            </p>

            <p>
            Keamanan adalah prioritas utama bagi Lanaya88 dan Dana. Dengan menggunakan Dana, pemain dapat yakin bahwa transaksi mereka dilindungi oleh sistem keamanan canggih. Dana menggunakan enkripsi tingkat tinggi untuk memastikan bahwa informasi finansial dan pribadi Anda tetap aman dari ancaman cyber. Hal ini memberikan ketenangan pikiran bagi pemain yang khawatir tentang keamanan data mereka.
            </p>

            <p>
            Lanaya88 sering menawarkan berbagai promosi dan bonus menarik bagi pemain yang melakukan deposit menggunakan Dana. Ini termasuk bonus deposit, cashback, dan berbagai hadiah menarik lainnya yang dapat meningkatkan saldo bermain Anda. Memanfaatkan promosi ini dapat memberikan keuntungan tambahan dan meningkatkan peluang Anda untuk menang.
            </p>

            <p>
            Lanaya88 menawarkan layanan pelanggan yang siap membantu setiap saat. Jika pemain mengalami masalah atau memiliki pertanyaan terkait transaksi Dana, tim dukungan pelanggan Lanaya88 selalu siap untuk memberikan bantuan cepat dan efektif. Ini memastikan bahwa pemain dapat mengatasi masalah apa pun dengan cepat dan melanjutkan permainan tanpa gangguan.
            </p>

            <h2>Apa Itu Slot Maxwin</h2>

            <p>
            Slot maxwin merujuk pada kemenangan maksimal yang bisa dicapai dalam sebuah permainan slot. Ini adalah hadiah terbesar yang ditawarkan oleh permainan slot tertentu, dan biasanya melibatkan kombinasi simbol khusus atau memicu fitur bonus tertentu. Kemenangan ini bisa mencapai ribuan bahkan jutaan kali lipat dari taruhan awal, menjadikannya sangat menggiurkan bagi para pemain.
            </p>

            <p>
            Slot maxwin biasanya dilengkapi dengan berbagai fitur bonus yang dapat meningkatkan peluang kemenangan Anda. Ini termasuk putaran gratis, pengganda kemenangan, dan fitur interaktif lainnya yang dapat membantu Anda mencapai kombinasi pemenang yang lebih menguntungkan.
            </p>

            <p>
            Memilih slot dengan RTP tinggi adalah langkah awal yang baik untuk meningkatkan peluang kemenangan Anda. Slot dengan RTP tinggi cenderung memberikan pembayaran yang lebih sering, meskipun tidak selalu dalam jumlah besar.
            </p>

            <h2>Rangkaian Keuntungan Bermain di Lanaya88 Bandar Togel Online Terpercaya</h2>

            <p>Berbicara perihal keuntungan, selama bettor memilih bermain togel melalui bandar terpercaya seperti Lanaya88 pasti akan senantiasa berpeluang mendapat banyak keuntungan. Karena, layanan togel bandar terpercaya sendiri selalu lebih mengutamakan kepentingan dan kepuasan member sehingga bisa menjaga loyalitasnya tanpa perlu mencari bandar togel lain.</p>
            <p>Selain itu, dengan banyaknya keuntungan yang bisa didapat dari bermain togel melalui bandar Lanaya88, para pemain akan senantiasa merasakan pengalaman yang jauh lebih memuaskan selain sekedar main judi togel saja. Inilah serangkaian keuntungan bermain di Lanaya88 bandar togel online terpercaya yang bisa anda dapatkan:</p>
            <li className='list-disc'>Kategori pasaran togel lengkap</li>
            <p>Salah satu keuntungan menarik bermain lewat bandar togel online terpercaya Lanaya88 yang bisa anda dapatkan yaitu bisa memainkan pasaran togel dengan pilihan yang terlengkap. Tentu saja, banyaknya pasaran togel yang disediakan oleh bandar terpercaya mampu memberi jaminan kepada semua member bisa bermain togel lebih memuaskan sebab bisa menjajal jenis pasaran manapun.</p>

            <li className='list-disc'>Peluang menang terjamin</li>
            <p>Bermain togel online dengan bergabung di bandar terpercaya tentu saja tidak akan kesulitan bagi pemain untuk dapat meraih kemenangan. Peluang menang bermain di bandar togel terpercaya bahkan selalu terjamin karena ada beberapa faktor yang menunjangnya seperti prediksi jitu, banyak pilihan pasaran terbaik, taruhan togel dengan sistem yang fair play, hingga live result togel tercepat.</p>
            
            <li className='list-disc'>Memperoleh banyak hadiah terbesar</li>
            <p>Tak hanya sekedar mudah menang, untungnya apabila bermain di bandar togel online terpercaya Lanaya88 juga dapat membuat togeler memperoleh banyak hadiah terbesar. Seperti halnya promo bonus, beberapa hadiah terbesar juga disediakan bandar togel terpercaya yang mana dapat menjamin keuntungan tambahan. Terlebih, jenis-jenis hadiah terbesar yang disediakan bandar terpercaya selalu lengkap dan diberikan secara realistis.</p>
            
            <li className='list-disc'>Berapapun kemenangan pasti dibayar</li>
            <p>Keuntungan berikutnya yang para pemain akan dapatkan dengan bermain di Lanaya88 bandar togel online terpercaya yaitu berapapun kemenangan pasti dibayar. Maksudnya, kemenangan yang member raih dalam bermain togel, maka tidak perlu menunggu lama untuk menerima pembayarannya yang akan diberikan secara langsung oleh pihak bandar Lanaya88.</p>
            
            <li className='list-disc'>Minimum bet dan deposit rendah</li>
            <p>Setiap bettor yang bermain togel biasanya tidak sekedar hanya menginginkan hadiah besar saja. Bahkan, para pemain pun juga selalu ingin bermain togel dengan lebih memudahkan. Keuntungan seperti demikian tentu saja bisa anda peroleh jika main di bandar togel online terpercaya Lanaya88 karena memberikan minimum bet dan deposit rendah sehingga mempermudah membernya pasang taruhan togel tanpa harus dengan modal yang besar.</p>
            
            <h2>Jenis-jenis Penawaran Keuntungan Paling Menarik dari Bandar Togel Online Terpercaya Lanaya88</h2>
            <p>Dalam rangka menciptakan layanan togel yang penuh kepuasan bagi membernya, tentu saja Lanaya88 selaku bandar togel yang terpercaya pasti menyediakan pula beberapa jenis-jenis penawaran keuntungan yang sangat menarik. Maksud dari adanya beberapa penawaran tersebut sudah pasti agar setiap member bisa meraih benefit tambahan walau tidak selalu memperoleh kemenangan.</p>
            <p>Ada banyak sekali saat ini bandar layanan togel online yang menawarkan beberapa keuntungan tertentu buat membernya. Tetapi, tidak seperti bandar terpercaya Lanaya88 di mana senantiasa memberikan benefit atau berbagai penawaran keuntungan yang senantiasa realistis hingga disertai dengan keuntungan yang jauh lebih besar.</p>
            <p>Makanya, dengan menjadikan bandar Lanaya88 sebagai sarana bermain togel online, tentu para pemain bisa merasakan pengalaman terbaik memperoleh banyak keuntungan. Apalagi, setiap jenis keuntungan juga terjamin mudah didapatkan selama setiap member sudah memenuhi syarat untuk mendapatkannya. Adapun jenis-jenis penawaran keuntungan paling menarik dari bandar togel online terpercaya Lanaya88 yang disediakan diantaranya meliputi:</p>
            <ul className='ml-4'>
              <li className='list-disc'>Hadiah 4D Terbesar up to 10 Juta</li>
              <li className='list-disc'>Diskon Togel 2D, 3D, 4D</li>
              <li className='list-disc'>Full Bet 2D, 3D, 4D</li>
              <li className='list-disc'>Prize 123</li>
              <li className='list-disc'>Hadiah BB Togel</li>
            </ul>
            <h2>Tips Dapatkan Keuntungan Bermain di Lanaya88 Bandar Togel Online Terpercaya dengan Mudah</h2>
            <p>Pada prinsipnya, bermain togel dengan bergabung melalui bandar terpercaya seperti misalnya Lanaya88 pastinya sudah menjamin para pemain bisa dapatkan banyak keuntungan. Walaupun demikian, tidak ada salahnya bagi pemain pun untuk mencoba bereksplorasi dengan menjajal beberapa tips terbaik sehingga setiap keuntungan apapun bisa didapat lebih mudah.</p>
            <p>Sama halnya ketika anda ingin menang, untuk bisa meraih banyak keuntungan juga memerlukan setidaknya beberapa trik terbaik. Simak lebih lengkapnya beberapa tips mendapatkan keuntungan bermain di bandar togel online terpercaya Lanaya88 dengan mudah seperti berikut ini:</p>
            <li className='list-disc'>Bermain togel lebih intens</li>
            <p>Cara termudah yang pertama untuk bisa dapatkan keuntungan bermain di Lanaya88 bandar togel online terpercaya yaitu dengan main togel secara lebih intens. Bila melakukan taruhan togel secara lebih intens, secara otomatis anda pun bakal lebih berpeluang dapatkan banyak keuntungan sebab dalam permainan apapun pastinya memerlukan adaptasi terlebih dahulu.</p>
            <li className='list-disc'>Manfaatkan bonus</li>
            <p>Jika anda punya beberapa bonus yang didapat sebelumnya bermain togel di bandar Lanaya88, maka untuk selanjutnya anda bisa manfaatkan bonus tersebut. Memanfaatkan bonus-bonus yang ada untuk pasang taruhan bermain togel pastinya akan membuka peluang anda dapatkan lebih banyak keuntungan sekaligus memicu kemunculan bonus-bonus lain yang lebih menarik.</p>
            <li className='list-disc'>Pasang lebih banyak pasaran</li>
            <p>Tips terbaik yang berikutnya yang bisa anda coba dalam bermain lewat bandar togel terpercaya agar dapatkan keuntungan besar yaitu pasang pada lebih banyak pasaran. Memilih bertaruh pada beberapa jenis pasaran dapat mempermudah anda dapatkan keuntungan, bahkan lebih banyak karena bisa dari pasaran mana saja yang dimainkan.</p>


            <h1>FAQ Tentang Produk Yang sering Ditanyakan</h1>
            <Accordion>
              <AccordionItem question='Apa yang membedakan Lanaya88 dari platform prediksi togel lainnya?' answer='Lanaya88 menawarkan sistem prediksi yang sangat akurat, dengan tingkat akurasi hingga 98%. Teknologi canggih seperti algoritma prediktif dan machine learning digunakan. Ini membuat analisis data real-time menjadi lebih efektif.' />
              <AccordionItem question='Bagaimana Lanaya88 mendapatkan lisensi dan regulasi untuk beroperasi?' answer='Lanaya88 mendapatkan lisensi resmi dan beroperasi sesuai peraturan yang berlaku. Ini menjamin keamanan dan keabsahan layanan bagi pengguna.' />
              <AccordionItem question='Bagaimana cara mengakses prediksi togel di Lanaya88?' answer='Anda bisa mengakses prediksi togel di Lanaya88 melalui website atau aplikasi mobile. Proses pendaftaran dan navigasi sangat mudah digunakan.' />
              <AccordionItem question='Apa saja keunggulan utama platform Lanaya88?' answer='Keunggulan Lanaya88 termasuk sistem prediksi yang akurat dan teknologi analisis data canggih. Keamanan data terjamin dan layanan pelanggan 24/7 sangat profesional.' />
              <AccordionItem question='Bagaimana cara mengoptimalkan hasil prediksi dari Lanaya88?' answer='Untuk hasil terbaik, ikuti prediksi secara konsisten dan kelola keuangan dengan bijak. Manfaatkan informasi prediksi secara efektif.' />
            </Accordion>
            
            <p>
              <strong>Keyword Terkait:</strong>
            </p>
            <ul className='text-[#FFD700] ml-4 leading-loose'>
              <li className='list-disc'>Lanaya88</li>
              <li className='list-disc'>slot online</li>
              <li className='list-disc'>slot gacor</li>
              <li className='list-disc'>slot dana maxwin</li>
              <li className='list-disc'>situs toto</li>
              <li className='list-disc'>hongkongpools</li>
              <li className='list-disc'>hongkong lotto</li>
              <li className='list-disc'>sydneypools</li>
              <li className='list-disc'>sydney lotto</li>
              <li className='list-disc'>bo togel bet 100</li>
              <li className='list-disc'>bo togel resmi</li>
              <li className='list-disc'>situs togel resmi</li>
              <li className='list-disc'>toto macau resmi</li>
              <li className='list-disc'>agen togel online</li>
              <li className='list-disc'>bandar togel terbesar</li>
              <li className='list-disc'>bo togel 100</li>
              <li className='list-disc'>situs togel terpercaya</li>
              <li className='list-disc'>bandar judol slot</li>
              <li className='list-disc'>agen slot online terpercaya</li>
              <li className='list-disc'>judi slot maxwin gampang menang</li>
              <li className='list-disc'>depo slot 5000</li>
              <li className='list-disc'>slot maxwin terbaru</li>
            </ul>
          </div>
          <div className='flex flex-col items-center text-center md:text-left md:items-start md:grid md:grid-cols-3 gap-16 md:gap-8 mb-10'>
            <div className='space-y-4'>
              <h3>TENTANG TOKO ONLINE</h3>
              <Link href='#' className='block'>
                <Image src='/logo.png' className='w-full ' alt='Logo' width='230' height='80' />
              </Link>
              <p>
                <strong>TOKO ONLINE</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quis repellat eveniet non eaque, similique soluta veritatis nesciunt pariatur ut animi distinctio ex, incidunt esse?
              </p>
            </div>
            <div className='space-y-8 md:space-y-12'>
              <h3>INFORMASI KONTAK</h3>
              <div className='space-y-4'>
                <p>
                  <strong>Alamat:</strong> Jl. Raya Pajajaran Kota Bogor, Jawa Barat
                </p>
                <p>
                  <strong>Nomor Telepon:</strong> +6212589654125
                </p>
                <p>
                  <strong>Email:</strong> namaweb@gmail.com
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <Link href='https://www.namaweb.com' className='hover:underline'>
                    <strong>https://www.namaweb.com</strong>
                  </Link>
                </p>
                <p>
                  <strong>Manajer: Edo Suwardo</strong>
                </p>
              </div>
            </div>
            <div className='space-y-8 md:space-y-16'>
              <h3>INFORMASI KONTAK</h3>
              <ul className='space-y-8'>
                <li>
                  <Link href='#' className='hover:underline'>
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Terma Dan Syarat
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Promosi
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Author
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='bg-[#5B5B5B] text-center py-4'>
            <p className='text-sm text-white font-medium'>Copyright &copy; 2024 - LXGROUP , All Rights Reserved </p>
          </div>
        </div>
      </div>
    </main>
  );
}
