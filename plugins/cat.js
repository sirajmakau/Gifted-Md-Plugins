/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : gifted-md
   * @author : GiftedTech <https://github.com/Giftedmaurice>
   * @youtube : https://www.youtube.com/c/@giftedtechnexus
   * @infoription : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Gifted Tech.
   * © 2024 Gifted-Md ✭ ⛥.
   * plugin date : 14/2/2024
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/







const {
    smd,
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
    smdJson,
    smdBuffer
     } = require('../lib')



smd({
    cmdname: "cat",
    desc: "Send Images of random Cats!",
    type: "misc",
    filename: __filename,
  },
  async(m)=>{
  try{
    await m.send('https://cataas.com/cat',{caption:"*meyaoooooooooooooou!*"},"img",m)
  }catch(e){ m.error(`${e}\n\nCommand: cat`,e,false)}
  })
  
  
