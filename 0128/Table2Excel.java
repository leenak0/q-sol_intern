@WebServlet("/Table2Excel")
public class Table2Excel extends HttpServlet {

    private SXSSFWorkbook wb;
    private SXSSFSheet s;
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
    throws ServletException, IOException {
        String filename = "test.xlsx";
        System.out.println("파일이름: "+filename);
        String sheetname = "Test Sheet";

        //create EXCEL file
        long start = System.currentTimeMillis();
        
        try {
            wb = new SXSSFWorkbook();
            s = wb.createSheet(sheetname);

            int i=0;
            int n=-1;

            while ( n++ < 10 ) {

            for(i=n*100;i<(n+1)*100;i++){
                setCellValue(i,0,"Test_col"+i);
                setCellValue(i,1,"Test_col_"+i);
                setCellValue(i,2,"Test_col_"+i);
                setCellValue(i,3,"Test_col_"+i);
                setCellValue(i,4,"Test_col_"+i);
            }
                // 메모리 flush
                ((SXSSFSheet)s).flushRows(10000); // retain 100 last rows and flush all others
            }
            // 파일생성
            // wb.write(new FileOutputStream(filename));
        }catch(Exception e){
            e.printStackTrace();
            System.err.println(e.getMessage());
        }

        long end = System.currentTimeMillis();
        System.out.println( "실행시간: " + ( end - start )/1000.0 +"초");

        resp.setStatus(200);
        resp.setContentType("application/msexcel;");
        resp.setHeader("Content-Disposition", "attachment; filename="+ filename + ";");
        
        try{
            String home = System.getProperty("user.home");
            File file = new File(home+"/Downloads/"+filename);
            wb.write(new FileOutputStream(file)); //파일생성
            System.out.println("파일경로: "+home+"/Downloads/"+filename+" 생성완료");
            wb.dispose(); //디스크에 임시파일로 저장한 파일 삭제
            System.out.println("다운로드완료/임시파일삭제");
        }catch(FileNotFoundException enfe){
            enfe.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public Row getRow(int i){
        Row r = s.getRow(i);
        if(r==null)
            r = s.createRow(i);
        return r;
    }
    
    public Cell getCell(int row,int cell){
        Row r = getRow(row);
        Cell c = r.getCell(cell);
        if(c==null)
            c = r.createCell(cell);
        return c;
    }
    
    public void setCellValue(int row, int cell, String cellvalue){
        Cell c = getCell(row,cell);
        c.setCellValue(cellvalue);
    }
}