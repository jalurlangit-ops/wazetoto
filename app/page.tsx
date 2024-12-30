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
          <div className='flex items-center justify-between pt-4'>
            <Link href='#' className='block'>
              <Image src='/logo.png' className=' w-40 sm:w-52 block' alt='Logo' width='230' height='80' />
            </Link>
            <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
              <Link href='#' className='font-bold text-black px-4 py-2 sm:px-8 sm:py-3 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                LOGIN
              </Link>
              <Link href='#' className='font-bold text-black px-4 py-2 sm:px-8 sm:py-3 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                DAFTAR
              </Link>
            </div>
          </div>
          <div className='my-20 space-y-6 text-center'>
            <h1>NAMA WEB & TAGLINE WEB</h1>
            <div className='grid grid-cols-4 gap-4'>
              <Link href='#' className='w-full py-2 font-bold text-black bg-gradient-to-r border border-[#EACD00] from-[#8B7B00] via-[#EACD00] to-[#8B7B00] rounded-md'>
                BAJU
              </Link>
              <Link href='#' className='w-full py-2 font-bold text-black bg-gradient-to-r border border-[#EACD00] from-[#8B7B00] via-[#EACD00] to-[#8B7B00] rounded-md'>
                CELANA
              </Link>
              <Link href='#' className='w-full py-2 font-bold text-black bg-gradient-to-r border border-[#EACD00] from-[#8B7B00] via-[#EACD00] to-[#8B7B00] rounded-md'>
                TAS
              </Link>
              <Link href='#' className='w-full py-2 font-bold text-black bg-gradient-to-r border border-[#EACD00] from-[#8B7B00] via-[#EACD00] to-[#8B7B00] rounded-md'>
                TOPI
              </Link>
            </div>
          </div>
          <div className='p-6 space-y-6 rounded-md glow-yellow mb-40'>
            <div className='flex flex-col'>
              <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full text-sm font-light border border-[#EACD00] text-surface'>
                      <thead className='font-medium border-b border-[#EACD00] bg-gradient-to-r from-[#2E2E2E] via-[#606060] to-[#2E2E2E] '>
                        <tr>
                          <th colSpan={2} scope='col' className='px-6 py-3 text-center border-2 border-e border-[#EACD00] '>
                            <h2>INFORMASI PRODUK</h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b border-[#EACD00] grid-cols-4'>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Nama Produk</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>NAMA PRODUK</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Jenis Produk</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>BAJU</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Harga Produk</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <Image src='/icon-redcircle.svg' className='size-4 aspect-square' width='16' height='16' alt='Red Circle' />
                              IDR 255.000
                            </div>
                          </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Brand</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <Image src='/icon-yellowcircle.svg' className='size-4 aspect-square' width='16' height='16' alt='Yellow Circle' />
                              SurPlus
                            </div>
                          </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Pengiriman</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Jakarta</td>
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
                              595 User
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Link href='#' className='block'>
              <Image src='/banner.png' className='w-full block' alt='Banner' width={757} height={411} />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus quaerat ipsum vel fuga similique suscipit voluptatibus fugit, assumenda excepturi consequuntur, aliquam tenetur magnam reprehenderit voluptatem cumque velit, dignissimos non dicta quae? Expedita mollitia
              quo veritatis, vero autem quia. Officia odio nesciunt qui vero voluptates aliquid nostrum? Consequuntur reiciendis illo illum. Numquam, nobis? Quam qui, inventore, repellendus hic eius voluptatem nobis eum ducimus cumque pariatur nihil minima illo sed quisquam dignissimos amet totam
              voluptatum mollitia commodi error reprehenderit magnam dolore similique? Amet ab fuga temporibus aliquid voluptatem. Quia facere, nam exercitationem repudiandae accusantium sed nisi expedita rerum laudantium mollitia. Ex!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt necessitatibus iste illo omnis! Nostrum eum sit excepturi reiciendis accusantium velit tenetur laborum animi quasi, voluptatem harum beatae deleniti hic facilis, recusandae pariatur facere aliquid officiis illo sed
              omnis libero, accusamus itaque. Doloremque voluptates libero eius perspiciatis quis! Illum harum illo cum. Est nam iusto repellendus explicabo aut ipsa expedita culpa provident dolor quae, qui quo fuga ab repellat dignissimos. Placeat, dicta perspiciatis. Minima ad temporibus tenetur.
              Mollitia libero repellat quisquam ipsum repellendus distinctio consectetur dolorem, modi soluta ipsa minus dolore officiis iure laborum blanditiis tempora cum magni non hic reprehenderit iusto id. Animi accusamus delectus dolore modi officia placeat cum deleniti. Rem ex doloremque
              fugit. Praesentium voluptate placeat amet, voluptas doloribus suscipit! Neque eligendi eum nihil ratione quo quas consequatur impedit, earum quos magnam molestiae officia dolorem alias sunt dolores blanditiis delectus accusantium qui hic consequuntur! Quis asperiores optio nisi
              reiciendis in architecto eius culpa laboriosam impedit accusantium cum cumque nam exercitationem vel dolorum quae, porro sapiente sed. Officia et iusto, eum cupiditate architecto sit voluptatem nesciunt harum ea autem blanditiis ex maiores. Vel incidunt suscipit illum consequuntur sed
              aliquam, quia quae nam reprehenderit vitae, ullam obcaecati a earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit, laborum eligendi dolores cupiditate autem consectetur tempora eos fugit ducimus, vero quo iusto nobis! Exercitationem voluptatem, ea, omnis quasi impedit, explicabo eum veniam eaque optio quia natus nisi
              repellat dolore sint autem nemo modi rem blanditiis. Aliquid eveniet, velit placeat similique asperiores eum quas tenetur ea temporibus, incidunt, dolorum magni! Cum, repellat sed. Aperiam reiciendis, corporis perferendis in, non consequatur reprehenderit adipisci laudantium totam
              quibusdam maiores. Facilis quo ipsum voluptatum nesciunt iusto! Ullam soluta, voluptate, minus cupiditate dolorum aliquam unde quisquam veniam molestiae eius eum rerum quos aspernatur dolore assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quod facilis vel obcaecati quae? Enim eos ratione error quia laudantium voluptate, quae recusandae officiis soluta? Nihil amet sunt doloribus illum, praesentium ipsum? Omnis repellat iure eum nesciunt, explicabo
              asperiores quae cupiditate. Labore neque accusamus magni cupiditate assumenda atque commodi consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt fuga repellat explicabo numquam perspiciatis veritatis quod facere cum recusandae dolor amet aspernatur alias sapiente delectus iusto, nobis labore inventore quasi necessitatibus et. Saepe voluptates eos placeat
              praesentium nostrum quos enim dolore vero, temporibus corrupti laboriosam dolor repellendus distinctio quidem iste exercitationem reiciendis cum veritatis recusandae necessitatibus doloribus nam quas deserunt aperiam. Accusantium aliquid quisquam ipsa. Autem asperiores repellendus
              facere quibusdam ducimus architecto repudiandae, omnis iste, iusto sed nihil sequi. Quia magnam dolorum quaerat, veritatis soluta a hic quam nesciunt tempora, sit recusandae esse beatae? Enim, est iure voluptatem provident deleniti aliquam atque alias autem debitis ut fugiat veniam
              facere quod vel praesentium sit corporis rem laborum sint commodi labore? Sequi perspiciatis itaque eveniet commodi?
            </p>
            <Link href='#' className='block'>
              <Image src='/banner.png' className='w-full block' alt='Banner' width={757} height={411} />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatibus hic ratione nesciunt facere porro sapiente eos, consequatur est maiores totam! Similique quisquam accusantium illum odio nesciunt provident, itaque aliquam maiores ipsum nobis recusandae sed exercitationem
              qui repellat voluptate asperiores necessitatibus at maxime quaerat consectetur dicta? Facilis vel nihil dolorem, ipsum nisi fugiat debitis consequatur quasi atque aliquam enim excepturi fugit iusto suscipit at eaque, iste cum impedit tenetur corporis architecto vitae. Unde, aliquam
              aut? Nam maiores nostrum assumenda ratione, temporibus, labore quas, ipsum quasi voluptates necessitatibus dolores suscipit id sapiente placeat itaque? Voluptatum voluptas voluptatem eum repellendus tempora consequuntur, hic eos velit molestiae consectetur nihil recusandae maiores?
              Ipsam atque dolores, reprehenderit temporibus culpa earum rerum odio maxime consectetur debitis. Repudiandae harum error aspernatur nulla commodi iure, odit a nam hic vel sit. Ad impedit vel nobis illum laboriosam accusantium alias consectetur velit sunt, incidunt voluptate labore?
              Corporis, ipsum cumque?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quas nam non corporis sed aliquid libero ex. Minima sunt numquam nisi quasi cupiditate nihil, fugiat fuga nostrum voluptate architecto hic delectus esse ipsam placeat corporis doloremque obcaecati eos, vitae blanditiis
              nulla veritatis quos porro vel! Consectetur, rem a? Quibusdam, totam blanditiis autem cupiditate ipsa eum hic suscipit asperiores natus quam rerum maxime quaerat, optio ullam! Tenetur sapiente quidem, ab cumque enim ipsum, in commodi laboriosam, fugit a ipsa eos ex? Possimus optio,
              molestiae est, officiis tempora quidem ad, aliquam earum beatae vero voluptatem minima rem ex perspiciatis magnam inventore dicta.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam error iste neque minus dicta doloremque voluptatum quod labore! Quia suscipit vero cum nemo, commodi deleniti numquam laudantium animi illo explicabo voluptatum odio neque necessitatibus repellat, dignissimos
              veniam aliquid tenetur minima amet atque magnam! Fugit, consequuntur? Qui doloremque animi blanditiis.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam error iste neque minus dicta doloremque voluptatum quod labore! Quia suscipit vero cum nemo, commodi deleniti numquam laudantium animi illo explicabo voluptatum odio neque necessitatibus repellat, dignissimos
              veniam aliquid tenetur minima amet atque magnam! Fugit, consequuntur? Qui doloremque animi blanditiis.
            </p>
            <Link href='#' className='block'>
              <Image src='/banner.png' className='w-full block' alt='Banner' width={757} height={411} />
            </Link>
            <h1>FAQ Tentang Produk Yang sering Ditanyakan</h1>
            <Accordion>
              <AccordionItem question='Apakah Produk 100% Original?' answer='Ya, semuanya original' />
              <AccordionItem question='Bagaimana Jika Barang Tidak Sesuai?' answer='Kalau tidak sesuai kamu bisa mengajukan pengembalian barang' />
              <AccordionItem question='Bagaimana Jika Salah Pesan Size?' answer='Kamu bisa melakukan pengembalian barang dan kami akan menggantinya dengan size yang sesuai' />
              <AccordionItem question='Apa Bisa pembayaran Kartu Kredit?' answer='Pasti bisa dong, selain kartu kredit bisa via ATM Bersama, QRIS, dan E-Wallet.' />
              <AccordionItem question='Apakah Ada Garansi Pengembalian Produk' answer='Ya, ada garansinya dijamin gacor!' />
            </Accordion>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eligendi molestias inventore eum aspernatur doloremque blanditiis, velit sequi quae accusantium enim esse iure! Laboriosam nulla molestiae debitis aspernatur similique, et obcaecati consequuntur libero possimus nesciunt
              voluptas in expedita delectus assumenda explicabo voluptatibus fugiat fuga. Aliquid debitis error corrupti iste eligendi.
            </p>
            <p>
              <strong>Keyword Terkait:</strong>
            </p>
            <ul className='text-[#FFD700] ml-4 leading-loose'>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
              <li className='list-disc'>
                <Link href='#'>Keyword</Link>
              </li>
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
